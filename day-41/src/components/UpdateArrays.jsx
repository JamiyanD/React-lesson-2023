
export default function UpdateArrays() {
    let a = [2, 3, 4, 5]
    console.log(a)
    a.push(6)
    console.log(a)
    a.unshift(1)
    console.log(a)
    return(
        <div>
            <p>Arrays</p>
        </div>
    )
}