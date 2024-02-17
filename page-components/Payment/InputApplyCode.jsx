const InputApplyCode = () => {
  return (

<form className="border-b  border-grayBorder pb-3">

    <div className="relative text-sm">
        <input type="search" id="default-search" className="block w-full p-3 md:p-4 border border-grayBorderLight rounded-[10px] bg-gray-50 dark:bg-darkAccent1   dark:text-white outline-none" placeholder="Apply Code" required/>
        <button type="submit" className="text-white  absolute right-1.5 w-[80px] sm:w-[100px] h-[36px] md:h-[44px] bottom-1.5 bg-gradientPrimary font-medium rounded-[10px]  ">Apply</button>
    </div>
</form>

  )
}

export default InputApplyCode
