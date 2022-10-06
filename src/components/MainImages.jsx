import React from "react"
import RenderedImages from "./RenderedImages"
import Loading from "./Loading"


function MainImages(props) {

  return (
    <>
      <section className="main-content">
        {props.isLoading ? <Loading /> :<RenderedImages  imageData={props.imageData}/>}
      </section>
    </>
  )
}

export default MainImages
