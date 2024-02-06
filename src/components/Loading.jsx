const Loading = () => {

  let circleCommonClasses = 'h-2.5 w-2.5 bg-current rounded-full';
//change for react icon
  return (
    <div className='flex mt-80 text-white'>
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}>🍿</div>
        <div
            className={`${circleCommonClasses} mr-1 animate-bounce200`}
        >🍿</div>
        <div className={`${circleCommonClasses} animate-bounce400`}>🍿</div>
    </div>
  )
}

export default Loading;