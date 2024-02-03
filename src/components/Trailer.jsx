const Trailer = ({videoKey}) => {

  return videoKey? (
    <div style={{color: 'red', marginTop: 200 }}>
      <div>
        <iframe src={`https://www.youtube.com/embed/${videoKey}`}></iframe>
      </div>
    </div>
  ): null
}

export default Trailer;