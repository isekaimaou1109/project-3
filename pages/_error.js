import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()

  return (
    <>
      <video loop autoPlay style={{ width: "-webkit-fill-available", height: "-webkit-fill-available", backgroundColor:"black" }}>
        <source src="/others/cau-be-ngay-tho-op.mp4" type="video/mp4" />
        <p>Your browser doesn't support HTML5 video. Here is
          a <a href="myVideo.mp4">link to the video</a> instead.</p>
      </video>
      <div onClick={() => router.replace("/")} 
           style={{ backgroundColor:"#f67789",width:"150px",borderRadius:"10px",padding:"20px",
                    textAlign:"center",margin:"10px",color:"#fff" }}>
        Về Trang chủ?
      </div>
    </>
  )
}