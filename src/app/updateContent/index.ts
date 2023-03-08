import {UPDATE_CONTENT_TYPE} from "./const";
import {EngineObject} from "../../data/types";

export const updateContent = (type: UPDATE_CONTENT_TYPE, object: EngineObject): void => {
    const allElements = [];
}


// 1. Stworzyć listę gdzie i kiedy powinien odbywać się update
// 2. Dodać do każdego kontenera obiektu odpowiedni dataset attribute (użyć do tego funkcji setObjectElementAttribute())
// 3. Pobierać wszystkie elementy
// 4. stworzyć switch case aby łatwo zarządzać aktualizacją
// 5. Optymalizacja
// 6. Kalsa main refactor
// 7. Testy