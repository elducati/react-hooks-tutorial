import React from "react"

const Hello = () => {
    React.useEffect(() => {
        console.log("render")
        return () => {
          console.log("unmount")
        }
      }, [])
      return <div>hello</div>
}
export default Hello