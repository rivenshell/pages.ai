import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      does any of this actually work
      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/78c27e88670389.Y3JvcCwyNDAwLDE4NzcsMCwxNjY.jpg"></img>
      regional art nominee
      {/* links */}
      <div className="">
        <a href="http://localhost:3000/contact" className="hover:bg-blue-700">
          click me
          <br></br>
        </a>
        <a
          href="https://www.youtube.com/channel/UCgCRFeMc7HGpt--DLJoocQg"
          className="hover:bg-red-600"
        >
          youtube channel
        </a>
      </div>
    </main>
  )
}
