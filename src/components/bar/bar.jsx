import './bar.css'

export default function Bar({ array, highlight, quickHighlights }) {   
    return(
        <div className='grid-container'>
            {array ? array.map((item, id)=> {
               
                const {a, b} = highlight
                const {pivot, green, orange} = quickHighlights

                return (
                <div 
                    key={id}
                    className='bar'
                    style={{
                        height: `${item/1.5}px`,
                        transition: "height 150ms linear, background-color 10ms",
                        backgroundColor: 
                            green === id || a === id ? "gold" 
                            : orange === id || b === id ? "coral"
                            : pivot === id ? "aquamarine"
                            : "grey",
                        }}
                />
            )}) : ''}
        </div>
    )
    
}


