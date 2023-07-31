import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";
function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
