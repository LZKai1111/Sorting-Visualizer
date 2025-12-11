import './navbar.css'

export default function Navbar({ onClickCreateArray, arraySize, setArraySize, handleMergeAnimation, handleQuickSort, handleHeapSort, handleBubbleSort, isSorting }) {

    const disabled =
    isSorting ? "disabled" : ""


    return (
        <div className='nav-container'>

            <button 
                onClick={onClickCreateArray}
                className={`btn-generic ${disabled}`}
                disabled={isSorting}
                >Generate New Array
            </button>
            
            <div className='divider-container'>
                <div className='divider'/>
            </div>
            
            <div className="slider-container">
                <div className="slider-value">Size: {arraySize}</div>

                <input
                type="range"
                min="10"
                max="100"
                value={arraySize}
                onChange={(e) => setArraySize(e.target.value)}
                className="slider-input"
                />
            </div>

            <div className='divider-container'>
                <div className='divider'/>
            </div>

            <button 
                onClick={handleMergeAnimation} 
                disabled={isSorting} 
                className={`btn-generic ${disabled}`}
                >Merge Sort
            </button>
            
            <div className='divider-container'>
                <div className='divider'/>
            </div>

            <button 
                onClick={handleQuickSort} 
                disabled={isSorting} 
                className={`btn-generic ${disabled}`}
                >Quick Sort
            </button>

            <div className='divider-container'>
                <div className='divider'/>
            </div>

            <button 
                onClick={handleHeapSort} 
                disabled={isSorting} 
                className={`btn-generic ${disabled}`}
                >Heap Sort
            </button>

            <div className='divider-container'>
                <div className='divider'/>
            </div>
            
            <button 
                onClick={handleBubbleSort} 
                disabled={isSorting} 
                className={`btn-generic ${disabled}`}
                >Bubble Sort
            </button>


        </div>
    )
}