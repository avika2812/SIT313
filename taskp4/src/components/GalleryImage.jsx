function GalleryImage(props) {
  return (
    <img
      src={props.image}
      alt={"Gallery image " + props.number}
    />
  )
}

export default GalleryImage