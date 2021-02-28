import { Sequelize, QueryTypes } from 'sequelize'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import { spawnSync } from 'child_process'

export default function handler(req, res) {
  const {
    query: { registerSession },
    body
  } = req

  if(req.headers.host == "localhost:3000" && req.headers.cookie == registerSession) {
    const { firstname, lastname, email, password, retypepassword, privacy, agree  } = body
    var database = "bestusers", schema = "normalusers", table = "info"
    const sequelize = new Sequelize(database, 'sa', 'nhat1234!', {
      host: '127.0.0.1',
      dialect: 'mssql'
    });

    const privateKey = fs.readFileSync(`/root/nextjs/project-3/privatekey.key`);
    var token = jwt.sign({ tokenId: registerSession }, privateKey, { algorithm: 'RS256' });

    sequelize.authenticate().then(() => console.log('Connection has been established successfully.'));

    const addEntries = async function() {
      let query = await sequelize.query(
        `
          SELECT * FROM ${schema}.${table} WHERE tokenId = ${token}
        `,
      { type: QueryTypes.SELECT, replacements: [token] })

      if(query.length == 1) {
        return "YOUR TOKEN IS DUPLICATE"
      } else {
        await sequelize.query(
          `INSERT INTO ${schema}.${table}(firstname,lastname,email,password,confirmpassword,privacy,agree,tokenId) 
          VALUES(
            ?,?,?,?,?,?,?,?
        )`,
        {
          replacements: [firstname,lastname,email,password,retypepassword,privacy,agree,token],
          type: QueryTypes.INSERT
        });

        const addUser = spawnSync("useradd", [`${firstname}`])
        const addPassword = spawnSync("passwd", [`${password}`])

        const userContent = fs.readFileSync("/etc/passwd", { encoding: 'utf8', flag: 'r' })
        const regex = new RegExp("(^\w+|^\d+)[:]{1}[x]{1}[:]{1}(\d+)[:](\d+)[:]{1}([a-zA-Z- ]+)[:]{1}((\/\w+)+)[:]{1}((\/\w+)+)", "gm")
        const userFilter = userContent.match(regex).join('').split(":")

        const uid = userFilter[2]
        const gid = userFilter[3]

        fs.mkdir(`/var/ftp/pub/${firstname}`, { mode: 740 }, (err) => {
          if(err) {
            throw err
          } else {
            console.log(`Successful created /var/ftp/pub/${firstname}!!!`)

            fs.chmodSync(`/var/ftp/pub/${firstname}`, 740)
            fs.chownSync(`/var/ftp/pub/${firstname}`, uid, gid)
          }
        })
      }
    }

    addEntries()
      .then((data) => res.status(200).json(data))
      .catch(e => console.error(e))
  }
}

