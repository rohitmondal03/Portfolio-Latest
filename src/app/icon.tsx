import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: "5px",
          borderRadius: "20%"
        }}
      >
        <div style={{
          backgroundColor: "#0019ff",
          width: '100%',
          height: '100%',
          borderRadius: '100%'
        }} />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}

{/* <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
      height: "100%",
      width: "100%",
      background: "black",
      color: "white"
    }}>
      <h1 style={{
        // fontSize: ""
      }}>
        Rohit's online presence
      </h1>

      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '200px',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: "20px",
          borderRadius: "20%"
        }}
      >
        <div style={{
          backgroundColor: "#0019ff",
          width: '100%',
          height: '100%',
          borderRadius: '100%'
        }} />
      </div>
    </div> */}