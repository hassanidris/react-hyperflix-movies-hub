const Loading = () => {

  let circleCommonClasses = 'h-2.5 w-2.5 bg-current rounded-full';
//change for react icon
  return (
    <div className='flex mt-52 text-m_gold text-2xl text-center items-center justify-center'>
        <div className={`${circleCommonClasses} mr-3 animate-bounce`}>O</div>
        <div
            className={`${circleCommonClasses} mr-3 animate-bounce200`}
        >O</div>
        <div className={`${circleCommonClasses} animate-bounce400`}>O</div>
    </div>
    
  )
}

export default Loading;


