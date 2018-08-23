

function getFibonacci(req, res) {
    let number = parseInt(req.query.number);
    var fibo = {
        number: number,
        fibonacci:new Fibonacci().showSeries(number)
    };
    res.status(200).json(fibo); //httpStatus.OK
}

function createFibonacci(req, res) {
    let number = parseInt(req.body.number);
    var fibo = {
        number: number,
        fibonacci:new Fibonacci().showSeries(number)
    };
    res.status(201).json(fibo);
}
function getComplexCalculator(req, res) {
    var expression = req.query.expression.replace(/ /g, '');
    expression = {
        expression: expression,
        result: ComplexCalculator(expression)
    };
    res.status(200).json(expression); //httpStatus.OK
}

function createComplexCalculator(req, res) {
    var expression = req.body.expression.replace(/ /g, '');
    expression = {
        expression: expression,
        result: ComplexCalculator(expression)
    };    
    res.status(201).json(expression);
}
function getPalindromo(req, res) {
   
    var fibo = {fibonacci:fibo};var word = req.query.word.trim();
    if (word)
        word = {
            word: word,
            palindromo: Palindromo(word)
        }
    res.status(200).json(word); //httpStatus.OK
}

function createPalindromo(req, res) {
    var word = req.body.word.trim();
    if (word)
        word = {
            word: word,
            palindromo: Palindromo(word)
        }
    res.status(201).json(word);
}
function getOperationSets(req, res) {
      
    var sets = {
        a: req.query.A.split(','),
        b: req.query.B.split(',')
      };
      sets.Union = Union(sets.a, sets.b);
      sets.Intersection = Intersection(sets.a, sets.b);
      sets.Difference = Difference(sets.a, sets.b);
    res.status(200).json(sets); //httpStatus.OK
}

function createOperationSets(req, res) {
    var sets = {
        a: req.body.A.split(','),
        b: req.body.B.split(',')
      };
      sets.Union = Union(sets.a, sets.b);
      sets.Intersection = Intersection(sets.a, sets.b);
      sets.Difference = Difference(sets.a, sets.b);
    res.status(201).json(sets);
}


function Fibonacci() {}
Fibonacci.prototype.showSeries = function(n) {
  let fiboserie; let a; let b; let c;
  fiboserie = [];
  a = 0; b = 1; c = 0;
  for (let i = 0; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    fiboserie.push(a);
  }
  return fiboserie;
};

function Palindromo(cadena) {
    let reverse = cadena.split('').reverse().join('').toString();
    if (reverse === cadena)
      return true;
  
    return false;
  }
  function ComplexCalculator(cadena) {
    let result = cadena;
    try {
      result = eval(cadena);
    } catch (error) {
      console.log(error);
    }
    return result;
  }
  function Union(a, b) {
    return Array.from(new Set([...a, ...b]));
  }
  function Difference(a, b) {
    return [[...a].filter(x => !b.includes(x)), [...b].filter(x => !a.includes(x))];
  }
  function Intersection(a, b) {
    return [...a].filter(x => b.includes(x));
  }

module.exports = {
    getFibonacci,
    createFibonacci,
    getComplexCalculator,
    createComplexCalculator,
    getPalindromo,
    createPalindromo,
    getOperationSets,
    createOperationSets
};