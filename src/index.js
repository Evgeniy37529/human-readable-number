module.exports = function toReadable (num) {
    if(num == 0) return 'zero';
    let arrOfNum = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
    let start, end, splitOnThree, partOfNumber, parts , arrWords, word;
    let numSting = String(num).toString();
    start = numSting.length;
    splitOnThree  = [];
    arrWords = []
    
    while (start > 0){
      end = start;
      start = Math.max(0 , start - 3)
      splitOnThree.push(numSting.slice(start , end));
    }

    for(let i = 0; i<splitOnThree.length; i++){
      
      parts = splitOnThree[i].split('').reverse().map(parseFloat);
      if(parts[1] === 1){
        parts[0] += 10;
      }

      if(word = scales[i]){
        arrWords.push(word)
      }

      if(word = arrOfNum[parts[0]]){
        arrWords.push(word);
      }
      if(word = tens[parts[1]]){
        arrWords.push(word);
      }
      if ((word = arrOfNum[parts[2]])) {
        arrWords.push(word + ' hundred');//seven hundred four hundred
        }
    }
    return arrWords.reverse().join(' ');
}
