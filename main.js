const mainElement = document.querySelector("main")
const array = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

const kata1heading = document.createElement('h1')
const kata1Answer = document.createElement('div')
mainElement.append(kata1heading)
mainElement.append(kata1Answer)
kata1heading.append('kata 1')
let counter = 0
while (counter < 20) {
    kata1Answer.append(counter + ', ')
    counter += 1
}
console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

const kata2heading = document.createElement('h1')
const kata2Answer = document.createElement('div')
mainElement.append(kata2heading)
mainElement.append(kata2Answer)
kata2heading.append('kata 2 ')

let counter2 = 2
while (counter2 <= 20) {
    kata2Answer.append(counter2 + ', ')
    counter2 += 2

}


console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata3heading = document.createElement('h1')
const kata3Answer = document.createElement('div')
mainElement.append(kata3heading)
mainElement.append(kata3Answer)
kata3heading.append('kata 3 ')

 let counter3 = 1
 while (counter3 <20) {
    kata3Answer.append(counter3 + ', ')
   counter3 += 2
 }
 
 
console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata4heading = document.createElement('h1')
const kata4Answer = document.createElement('div')
mainElement.append(kata4heading)
mainElement.append(kata4Answer)
kata4heading.append('kata 4 ')
 
  let counter4 =5
 while (counter4 <100) {
    kata4Answer.append(counter4 + ', ')
   counter4 += 5
 }
 
 console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

const kata5heading = document.createElement('h1')
const kata5Answer = document.createElement('div')
mainElement.append(kata5heading)
mainElement.append(kata5Answer)
kata5heading.append('kata 5 ')
let counter5 = 1
 while (counter5 <= 100) {
     const isSquare = Number.isInteger(Math.sqrt(counter5));
     if (isSquare){
        kata5Answer.append(counter5 + ', ')
     }
    counter5 += 1
 }
 

console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata6heading = document.createElement('h1')
const kata6Answer = document.createElement('div')
mainElement.append(kata6heading)
mainElement.append(kata6Answer)
kata6heading.append('kata 6 ')
 
for (let counter6 = 20; counter6 >= 1; counter6 += -1)
kata6Answer.append(counter6 + ', ')


console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata7heading = document.createElement('h1')
const kata7Answer = document.createElement('div')
mainElement.append(kata7heading)
mainElement.append(kata7Answer)
kata7heading.append('kata 7 ')

 let counter7 = 20
 while (counter7 >1) {
     
   counter7 -= 2
   kata7Answer.append(counter7 + ', ')
 }
 console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

const kata8heading = document.createElement('h1')
const kata8Answer = document.createElement('div')
mainElement.append(kata8heading)
mainElement.append(kata8Answer)
kata8heading.append('kata 8 ') 
 
 let counter8 =19
 while (counter8 > 1) {

  kata8Answer.append(counter8 + ', ')
  counter8 -= 2
 }

const kata9heading = document.createElement('h1')
const kata9Answer = document.createElement('div')
mainElement.append(kata9heading)
mainElement.append(kata9Answer)
kata9heading.append('kata 9 ') 
 
 let counter9 =105
 while (counter9 >5) {
  counter9 -= 5
  kata9Answer.append(counter9 + ', ')

 }
  console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') 

  const kata10heading = document.createElement('h1')
  const kata10Answer = document.createElement('div')
  mainElement.append(kata10heading)
  mainElement.append(kata10Answer)
  kata10heading.append('kata 10 ')
  let counter10 = 100
   while (counter10 >= 1) {
       const isSquare = Number.isInteger(Math.sqrt
  (counter10));
       if (isSquare){
          kata10Answer.append(counter10 + ', ')
       }
      counter10 -= 1
      }
      const kata11heading = document.createElement('h1')
      const kata11Answer = document.createElement('div')
      mainElement.append(kata11heading)
      mainElement.append(kata11Answer)
      kata11heading.append('kata 11 ')
      for (let index = 0; index < array.length; index++){

        kata11Answer.append(array[index] + ', ')
      }
      const kata12heading = document.createElement('h1')
      const kata12Answer = document.createElement('div')
      mainElement.append(kata12heading)
      mainElement.append(kata12Answer)
      kata12heading.append('kata 12 ')

      const kata13heading = document.createElement('h1')
      const kata13Answer = document.createElement('div')
      mainElement.append(kata13heading)
      mainElement.append(kata13Answer)
      kata13heading.append('kata 13 ')
      for (let index = 0; index < array.length; index++){
        if (array[index] % 2 ===0){
          
          kata12Answer.append(array[index]+ ', ')
        }
          else{
            
            kata13Answer.append(array[index]+ ', ')
          }
      }
      const kata14heading = document.createElement('h1')
      const kata14Answer = document.createElement('div')
      mainElement.append(kata14heading)
      mainElement.append(kata14Answer)
      kata14heading.append('kata 14 ')
      let squareArray = []
      for (let index = 0; index < array.length; index+=1) {
        let squareArray = []
        squareArray = array[index] * array[index]
        
           kata14Answer.append(squareArray + ', ')
        
      }
  
      const kata15heading = document.createElement('h1')
      const kata15Answer = document.createElement('div')
      mainElement.append(kata15heading)
      mainElement.append(kata15Answer)
      kata15heading.append('kata 15 ')
      let results = 0
      for (let index = 0; index < 21; index +=1){
        results +=index

      }
      kata15Answer.append(results)
  
      const kata16heading = document.createElement('h1')
      const kata16Answer = document.createElement('div')
      mainElement.append(kata16heading)
      mainElement.append(kata16Answer)
      kata16heading.append('kata 16 ')

      let result2 = 0
      for (let index = 0; index < array.length; index +=1){
        result2 += array[index]

      }
        kata16Answer.append(result2)
     
        const kata17heading = document.createElement('h1')
        const kata17Answer = document.createElement('div')
        mainElement.append(kata17heading)
        mainElement.append(kata17Answer)
        kata17heading.append('kata 17 ')   

        kata17Answer.append(Math.min(...array))


        const kata18heading = document.createElement('h1')
        const kata18Answer = document.createElement('div')
        mainElement.append(kata18heading)
        mainElement.append(kata18Answer)
        kata18heading.append('kata 18 ')   

        kata18Answer.append(Math.max(...array))
  //Display the largest element in sampleArray.
