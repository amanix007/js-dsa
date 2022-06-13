



const debounce = (func, wait) => {
  let timeoutid;
  return function exec(...args) {

    clearTimeout(timeoutid);

    timeoutid = setTimeout(() => {
      clearTimeout(timeoutid);
      func(args)
    }, wait);

  }

}
const inputChange = debounce(() => {
  console.log();
}, 300)
for(let i= 0; i < 5; i++){
  inputChange()
}