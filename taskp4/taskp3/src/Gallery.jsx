import GalleryImage from './GalleryImage'

function Gallery(props) {
  return (
    <>
      <div className="work-heading">
        <h1>Gallery</h1>
      </div>

      <div className="gallery">
        {props.images.map((image, index) => (
          <GalleryImage
            key={index}
            image={image}
            number={index + 1}
          />
        ))}
      </div>
    </>
  )
}

export default Gallery