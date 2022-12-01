export default function Test({toppings}){
    return (
        <div>
            <h1>show this list</h1>
            <ul>{toppings.map((element) => {
                return <li key = {element}>{element}</li>
            })}</ul>
        </div>
    )
    }
    
    
    
    
    
    
    export async function getStaticProps(){
        const list = [
            "California",
            "New York",
            "Austin",
            "Chicago"
        ]
        return {
            props: {
                toppings: list
            }
        }
    }