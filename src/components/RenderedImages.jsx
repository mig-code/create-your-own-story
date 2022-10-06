import React from "react"


function RenderedImages(props) {

  return (
    <>
      {props.imageData.map((item) => {
        return (
          <div className="box-content" key={item.id}>
            <div className="box-text">{<p>{item.title.toUpperCase()}</p>}</div>

            <div className="box-image">
              <img
                src={`https://static.arasaac.org/pictograms/${item.img}/${item.img}_500.png`}
              ></img>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default RenderedImages
