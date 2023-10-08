const Watch = () => {
  const videoKey = '5emJgNiFbAA';
  return (
    <div className="h-screen w-screen">
      <iframe className="h-full w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default Watch;
