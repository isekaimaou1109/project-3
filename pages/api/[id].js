import { Sequelize, QueryTypes } from 'sequelize'
import fs from 'fs'
import { spawnSync } from 'child_process'

export default function queryRows(req, res) {
  const {
    query: { id }
  } = req

  if(req.headers.host == "localhost:3000" && req.headers.cookie) {
    var database = "bestusers", schema = "normalusers", table = "info"
    const sequelize = new Sequelize(database, 'sa', 'nhat1234!', {
      host: '127.0.0.1',
      dialect: 'mssql'
    });

    sequelize.authenticate().then(() => console.log('Connection has been established successfully.'));

    sequelize.query(
      `
        SELECT * from ${schema}.${table}
      `,
    {
      type: QueryTypes.SELECT
    }).then((data) => {
      res.status(200).json(data)
    })
      .catch(e => res.end(404))
  }
}