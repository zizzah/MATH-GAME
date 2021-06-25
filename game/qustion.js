for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }

  
  function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
  }
  
  sayHi();