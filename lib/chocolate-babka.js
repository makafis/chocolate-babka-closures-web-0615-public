function counterCreator(number){
  var current_num = number;

  return function(){
    current_num++
    return current_num;
  };
}

function countAnnouncer(arg1, arg2){
  var counter = arg2();
  return function(){
    return ("Now serving " + arg1 + " number " + counter + "!");
  };


}