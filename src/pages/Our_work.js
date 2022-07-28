export function OurWork({kittens}){
  return (
    <>
      <h1>Our work</h1>
      <ul>
        {kittens.map(({src: {tiny}, alt, id}) => {
          // console.log('kitten:', kitten);
          return (
            <li key={id}>
              <img src={tiny} alt={alt}/>
            </li>
          )
        })}
      </ul>
    </>
  )
}