import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavouriteCats, deleteFavouriteImage } from "../../actions";
import { Grid, Card, CardMedia, CardActions, IconButton, Typography }  from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavouriteCatImages = () => {
    const dispatch = useDispatch();
    const catsList = useSelector(state => state?.catsAssessment?.favCatsList);
    useEffect(() => {
        dispatch(getFavouriteCats());
    }, [dispatch]);

    const favouriteImage = (id) => {
        dispatch(deleteFavouriteImage(id))
    }

    return (<>
        <Grid sx={{marginTop: '20px'}}>
            <Typography variant="h5" color="text.secondary">
                Favourite Images ({catsList?.length})
            </Typography>
            <Grid container gap={5} sx={{marginTop: '20px'}}>
                {catsList?.map((cat, i) => <div key={cat.id}>
                    <Grid>
                        <Card sx={{ minWidth: 550, maxWidth: 600 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={cat.image.url}
                                alt={cat.image_id}
                            />
                            <CardActions disableSpacing>
                                <IconButton data-testid={`remove-from-fav-${i}`} aria-label="add to favorites" title="Remove from Favourites" onClick={()=>favouriteImage(cat.id)}>
                                    <FavoriteIcon sx={{color:'red'}} />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>)}
            </Grid>
        </Grid>
    </>)
};
export default FavouriteCatImages;