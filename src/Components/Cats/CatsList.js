import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUploadedCats, updateFavouriteImage } from "../../actions";
import { Grid, Card, CardMedia, CardActions, IconButton, Typography }  from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CatsList = () => {
    const dispatch = useDispatch();
    const catsList = useSelector(state => state?.catsAssessment?.catsList);

    useEffect(() => {
        dispatch(getUploadedCats());
    }, [dispatch]);

    const favouriteImage = (id) => {
        dispatch(updateFavouriteImage(id))
    }

    return (<>
        <Grid sx={{marginTop:'20px'}}>
            <Typography variant="h5" color="text.secondary">
                Uploaded Images
            </Typography>
            <Grid container gap={5}>
                {catsList?.map((cat, i) => <div key={cat.id}>
                    <Grid>
                        <Card sx={{ minWidth: 510, maxWidth: 600 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={cat.url}
                                alt={cat.id}
                            />
                            <CardActions disableSpacing>
                                <IconButton data-testid={`add-to-fav-${i}`} aria-label="add to favorites" title="Add to Favourites" onClick={()=>favouriteImage(cat.id)}>
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>)}
            </Grid>
        </Grid>
    </>)
};
export default CatsList;