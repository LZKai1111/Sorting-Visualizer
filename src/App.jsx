import { useState, useRef } from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Bar from './components/bar/bar.jsx'
import { mergeSort } from './Algorithms/merge.js'
import { quickSort } from './Algorithms/quick.js'
import { heapSort } from './Algorithms/heap.js'
import { bubbleSort } from './Algorithms/bubble.js'


function App() {

  const [array, setArray] = useState([])
  const [arraySize, setArraySize] = useState(50)
  const [speed, setSpeed] = useState(20)
  const [isSorting, setIsSorting] = useState(false);
  const timeoutsRef = useRef([]);

  const [highlight, setHighlight] = useState({ a: -1, b: -1 })



  const onClickCreateArray = () => {
    const newArray = []
    for(let i = 0; i < arraySize; i++) {
        newArray.push(getRandomInt(100, 1000))
    }
    setSpeed(newArray>=50 ? 5 : 30)
    setArray(newArray)
  }

  // MERGE SORT

  const handleMergeAnimation = () => {
    const animations = mergeSort(array)
    CRSanimation(animations)
  }


  // QUICK SORT

  const [quickHighlights, setQuickHighlights] = useState({ pivot: -1, green: -1, orange: -1 })

  const handleQuickAnimation = () => {
    setIsSorting(true)
    const animations = quickSort(array)
    const newArr= [...array]

    animations.forEach((animation, id) => {
      const timeout = setTimeout(() => {
        const [type, i, j] = animation

        if(type === "comparePi") {
          setQuickHighlights({ pivot: j, green: i, orange: -1 })
        } else if(type === "revertPi") {
          setQuickHighlights({ pivot: -1, green: -1, orange: -1 })
        } else if(type === "compareI") {
          setQuickHighlights({ pivot: -1, green: i, orange: j })
        } else if(type === "revertI") {
          setQuickHighlights({ pivot: -1, green: -1, orange: -1 })
        } else if(type === "swap") {
          [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
          setArray([...newArr])
        }
        if (id === animations.length - 1) {
          setIsSorting(false);
        }
      }, speed * id)
      timeoutsRef.current.push(timeout)
    })
  }


  // HEAP SORT

  const handleHeapAnimation = () => {
    const animations = heapSort(array)
    CRSanimation(animations)
  }


  // BUBBLE SORT

  const handleBubbleSort = () => {
    const animations = bubbleSort(array)
    setSpeed(1)
    CRSanimation(animations)
    setSpeed(5)
  }


  // compare, revert, swap animations

  const CRSanimation = (animations) => {
    setIsSorting(true);
    const newArr = [...array];

    animations.forEach((animation, id) => {
      const timeout = setTimeout(() => {
        const [type, i, j] = animation;

        if(type === "compare") {
          setHighlight({ a: i, b: j });
        } 
        else if(type === "revert"){
          setHighlight({ a: -1, b: -1 });
        } 
        else if(type === "swap") {
          [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
          setArray([...newArr]);
        } 
        else if(type === "overwrite") {
          newArr[i] = j;
          setArray([...newArr]);
        }

        if (id === animations.length - 1) {
          setIsSorting(false);
        }
      }, speed * id);

      timeoutsRef.current.push(timeout);
    });
  };


  return (
    <>
      <Navbar 
      onClickCreateArray={onClickCreateArray} 
      arraySize={arraySize}
      setArraySize={setArraySize}
      handleMergeAnimation={handleMergeAnimation}
      handleQuickSort={handleQuickAnimation}
      handleHeapSort={handleHeapAnimation}
      handleBubbleSort={handleBubbleSort}
      isSorting={isSorting}
      />
      <Bar array={array} highlight={highlight} quickHighlights={quickHighlights}/>
    </>
  )
}

export default App


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}