import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/reducers/favoriteSlice";

const useFavorite = (id, data) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);
  const isFavorite = favorite.find((item) => item.id === id) ? true : false;

  const handleLikePress = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ id }));
    } else {
      dispatch(
        addFavorite({
          title: data.title,
          id: data.id,
          thumbnailUrl: data.thumbnailUrl,
        }),
      );
    }
  };

  return { isFavorite, handleLikePress };
};

export default useFavorite;
