import Progress from "./Progress"

const BreedInfo = ({ breed, isShowProgress = true }) => {
  return (
    <>
      <h2>Breed name: {breed.name}</h2>
      <p>Alternative names: {breed.alt_names || <>-</>}</p>
      <h5>Temperament: {breed.temperament}</h5>
      <p>Life span: {breed.life_span} years</p>
      <p>Weight: {breed.weight.metric} kg</p>
      <p>Origin: {breed.origin}</p>
      <p>Description: {breed.description}</p>
      {isShowProgress &&
        <>
          <Progress label="Adaptability" value={breed.adaptability} />
          <Progress label="Affection level" value={breed.affection_level} />
          <Progress label="Child riendly" value={breed.child_friendly} />
          <Progress label="Dog friendly" value={breed.dog_friendly} />
          <Progress label="Energy level" value={breed.energy_level} />
          <Progress label="Grooming" value={breed.grooming} />
          <Progress label="Health issues" value={breed.health_issues} />
          <Progress label="Intelligence" value={breed.intelligence} />
          <Progress label="Shedding Level" value={breed.shedding_level} />
          <Progress label="Social needs" value={breed.social_needs} />
          <Progress label="Stranger friendly" value={breed.stranger_friendly} />
        </>
      }
    </>
  )
}

export default BreedInfo