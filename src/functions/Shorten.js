  const shorten =(title)=>{
    const a =title.split(" ");
    const newtitle=`${a[0]} ${a[1]}`
    return newtitle
}
export {shorten}