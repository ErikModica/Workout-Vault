import React from 'react';

// const muscleList = [
//   { name: 'Abs', idList: [345, 343, 167, 91, 94, 92, 416, 544, 303, 326, 166, 383, 165, 125, 126, 281, 93, 197, 238, 409, 263, 631, 176, 325, 95, 170, 310, 318, 278] },
//   { name: 'Biceps', idList: [74, 81, 80, 129, 181, 626, 212, 275, 298, 86, 138, 291, 193, 208, 771, 205, 768] },
//   { name: 'Calves', idList: [308, 776, 104, 103, 411, 102] },
//   { name: 'Chest', idList: [307, 192, 97, 354, 98, 99, 207, 194, 100, 101, 260, 781, 414, 122, 145, 146, 163, 206, 210, 168, 338, 211, 270, 182, 790, 399, 302, 393, 258, 195, 203] },
//   { name: 'Forearms', idList: [317, 382] },
//   { name: 'Glutes', idList: [637, 342, 112, 113, 191, 408, 650, 854, 249, 792, 154, 117, 118, 389, 160, 185, 570, 387, 376, 161, 330] },
//   { name: 'Hamstrings', idList: [637, 330, 792, 154, 117, 118, 160, 209, 387] },
//   { name: 'Lats', idList: [362, 109, 110, 181, 213, 340, 188, 187, 214, 143, 144, 141, 107, 339, 216, 215, 212, 204] },
//   { name: 'Lowerback', idList: [105, 161, 278, 330, 209, 557] },
//   { name: 'Midback', idList: [412, 340, 626, 202, 107, 670, 801, 106, 204] },
//   { name: 'Quads', idList: [637, 407, 405, 342, 300, 112, 113, 796, 115, 114, 389, 557, 570, 396] },
//   { name: 'Shoulders', idList: [227, 268, 421, 124, 265, 329, 394, 233, 807, 164, 148, 149, 306, 312, 229, 189, 190, 237, 802, 119, 123, 152, 155, 805, 150, 151, 422, 319, 271, 147, 127, 311, 359] },
//   { name: 'Traps', idList: [289, 128, 202, 429] },
//   { name: 'Triceps', idList: [344, 88, 341, 217, 82, 83, 274, 85, 84, 291, 195, 360, 386, 218, 279, 186, 162, 89, 90, 139, 203] }
// ];

// const mappedMuscleList = muscleList.map(muscle => {
//   return (
//   <div onClick={getExercise} idlist={muscle.idList} key={muscle.name} className="muscle-group">
//     <div>{muscle.name}</div>
//   </div>
//   )
// })

// const absIDList = [345, 343, 167, 91, 94, 92, 416, 544, 303, 326, 166, 383, 165, 125, 126, 281, 93, 197, 238, 409, 263, 631, 176, 325, 95, 170, 310, 318, 278];
// const bicepsIDList = [74, 81, 80, 129, 181, 626, 212, 275, 298, 86, 138, 291, 193, 208, 771, 205, 768];
// const calvesIDList = [308, 776, 104, 103, 411, 102];
// const chestIDList = [307, 192, 97, 354, 98, 99, 207, 194, 100, 101, 260, 781, 414, 122, 145, 146, 163, 206, 210, 168, 338, 211, 270, 182, 790, 399, 302, 393, 258, 195, 203];
// const forearmsIDList = [317, 382];
// const glutesIDList = [637, 342, 112, 113, 191, 408, 650, 854, 249, 792, 154, 117, 118, 389, 160, 185, 570, 387, 376,  161, 330];
// const hamstringsIDList = [637, 330, 792, 154, 117, 118, 160, 209, 387];
// const latsIDList = [362, 109, 110, 181, 213, 340, 188, 187, 214, 143, 144, 141, 107, 339, 216, 215, 212, 204];
// const lowerbackIDList = [105, 161, 278, 330, 209, 557];
// const midbackIDList = [412, 340, 626, 202, 107, 670, 801, 106, 204];
// const quadsIDList = [637, 407, 405, 342, 300, 112, 113, 796, 115, 114, 389, 557, 570, 396];
// const shouldersIDList = [227, 268, 421, 124, 265, 329, 394, 233, 807, 164, 148, 149, 306, 312, 229, 189, 190, 237, 802, 119, 123, 152, 155, 805, 150, 151, 422, 319, 271, 147, 127, 311, 359];
// const trapsIDList = [289, 128, 202, 429];
// const tricepIDList = [344, 88, 341, 217, 82, 83, 274, 85, 84, 291, 195, 360, 386, 218, 279, 186, 162, 89, 90, 139, 203];


// const outputArr = [];

// function getExercise(event) {
//   for(let i = 0; i < tricepIDList.length; i++) {
//   fetch(`https://wger.de/api/v2/exerciseinfo/${tricepIDList[i]}/`)
//     .then(res => res.json())
//     .then(exercise => {
//       // outputArr.push(exercise);
//     })
//   }
//   console.dir(event.target)
//   console.log(outputArr)
// }


// // function getExercise(event) {
// //   fetch('https://wger.de/api/v2/exerciseinfo/?limit=500')
// //     .then(res => res.json())
// //     .then(exercise => {
// //       console.log(exercise)
// //       const armsArray = [];
// //       const idArray = [];
// //       for (let i = 0; i < exercise.results.length; i++) {
// //         if (exercise.results[i].language.id === 2 && exercise.results[i].category.name === "Legs") {
// //           armsArray.push(exercise.results[i])
// //           idArray.push(exercise.results[i].id)
// //         }
// //       }
// //       console.log(armsArray)
// //       console.log(idArray)
// //     })
// // }

// export default function Exercises(props) {
//   return (
//     <>
//       <div className="current-page">EXERCISES</div>
//       <main>
//         <div className="exercise-accordion">
//           {mappedMuscleList}
//         </div>
//       </main>
//     </>
//   );
// }
const muscleList = [
  { name: 'Abs', idList: [345, 343, 167, 91, 94, 92, 416, 544, 303, 326, 166, 383, 165, 125, 126, 281, 93, 197, 238, 409, 263, 631, 176, 325, 95, 170, 310, 318, 278] },
  { name: 'Biceps', idList: [74, 81, 80, 129, 181, 626, 212, 275, 298, 86, 138, 291, 193, 208, 771, 205, 768] },
  { name: 'Calves', idList: [308, 776, 104, 103, 411, 102] },
  { name: 'Chest', idList: [307, 192, 97, 354, 98, 99, 207, 194, 100, 101, 260, 781, 414, 122, 145, 146, 163, 206, 210, 168, 338, 211, 270, 182, 790, 399, 302, 393, 258, 195, 203] },
  { name: 'Forearms', idList: [317, 382] },
  { name: 'Glutes', idList: [637, 342, 112, 113, 191, 408, 650, 854, 249, 792, 154, 117, 118, 389, 160, 185, 570, 387, 376, 161, 330] },
  { name: 'Hamstrings', idList: [637, 330, 792, 154, 117, 118, 160, 209, 387] },
  { name: 'Lats', idList: [362, 109, 110, 181, 213, 340, 188, 187, 214, 143, 144, 141, 107, 339, 216, 215, 212, 204] },
  { name: 'Lowerback', idList: [105, 161, 278, 330, 209, 557] },
  { name: 'Midback', idList: [412, 340, 626, 202, 107, 670, 801, 106, 204] },
  { name: 'Quads', idList: [637, 407, 405, 342, 300, 112, 113, 796, 115, 114, 389, 557, 570, 396] },
  { name: 'Shoulders', idList: [227, 268, 421, 124, 265, 329, 394, 233, 807, 164, 148, 149, 306, 312, 229, 189, 190, 237, 802, 119, 123, 152, 155, 805, 150, 151, 422, 319, 271, 147, 127, 311, 359] },
  { name: 'Traps', idList: [289, 128, 202, 429] },
  { name: 'Triceps', idList: [344, 88, 341, 217, 82, 83, 274, 85, 84, 291, 195, 360, 386, 218, 279, 186, 162, 89, 90, 139, 203] }
];



export default class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = { muscleList }
  }




    getExercise(event) {
    for (let i = 0; i < tricepIDList.length; i++) {
      fetch(`https://wger.de/api/v2/exerciseinfo/${tricepIDList[i]}/`)
        .then(res => res.json())
        .then(exercise => {
          // outputArr.push(exercise);
        })
    }
    console.dir(event.target)
    console.log(outputArr)
  }

  renderMuscleGroups() {
    const mappedMuscleList = muscleList.map(muscle => {
      return (
        <div onClick={this.getExercise} idlist={muscle.idList} key={muscle.name} className="muscle-group">
          <div>{muscle.name}</div>
        </div>
      )
    })
    return mappedMuscleList;
  }


  render() {
    return (
      <>
        <div className="current-page">EXERCISES</div>
        <main>
          <div className="exercise-accordion">
            {this.renderMuscleGroups()}
          </div>
        </main>
      </>
    );
  }

}
