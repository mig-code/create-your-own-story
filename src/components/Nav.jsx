import React from "react"
import { useEffect, useState } from "react"

function Nav(props) {
  console.log("NAV render")
  let rand
  const [latestData, setLatestData] = useState([])

  useEffect(() => {
    console.log("useEffect")
    props.setIsLoading(true)
    renderImages()
  }, [latestData])

  function createArrayOfImages(data) {
    let title, img, id
    let array = []
    for (let i = 0; i < 3; i++) {
      rand = Math.floor(Math.random() * data.length)
      title = data[rand].keywords[0].keyword
      img = data[rand]._id
      id = i
      array.push({ title, img, id })
    }
    props.setIsLoading(false)
    props.setImageData(array)
  }

  function renderImages() {
    props.setIsLoading(true)
    props.setImageData([])

    if (latestData.length === 0) {
      fetch("https://api.arasaac.org/api/pictograms/all/es")
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setLatestData(data)
        })
        .catch((error) => console.error("Error:", error))
    } else {
      createArrayOfImages(latestData)
    }
  }

  return (
    <>
      <nav>
        <h1>Crea tu historia</h1>

        <button
          className="btn-render"
          onClick={renderImages}
          disabled={props.isLoading}
        >
          Nueva Historia
        </button>
      </nav>
    </>
  )
}

export default Nav
