import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import LoadingComponent from "../shared/LoadingComponent";
import {useEffect, useRef, useState} from "react";
import {movieActions} from "../../store/movie/reducer";
import {Carousel, CarouselCaption, CarouselControl, CarouselItem} from "reactstrap";

const MovieComponent = () => {

  const {list, states: {getAll}} = useSelector((root: RootState) => root.movieReducer);
  const [activeIndex, setActiveIndex] = useState(0);
  const animating = useRef(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getAll());
  }, [dispatch]);

  function onExiting() {
    animating.current = true;
  }

  function onExited() {
    animating.current = false;
  }

  function next() {
    setActiveIndex(i => i >= list.length - 1 ? 0 : i + 1)
  }


  function previous() {
    if (animating.current) return;
    setActiveIndex(i => i <= 0 ? list.length - 1 : i - 1)
  }

  return (
    <LoadingComponent state={getAll}>
      <Carousel
        interval={10000}
        className="h-75 mt-4"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {list.map((item, i) => {
          const prev = list[i - 1]?.image ?? list[list.length - 1].image;
          const next = list[i + 1]?.image ?? list[0].image;
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.id}
              className="bg-white">
              <div className="center-content">
                {prev && <img className="shadow-lg rounded" width={"25%"} src={prev} alt={item.name}/>}
                <img className="shadow-lg rounded mx-3 cursor-pointer" width={"33%"} src={item.image} alt={item.name}/>
                {next && <img className="shadow rounded" width={"25%"} src={next} alt={item.name}/>}
              </div>
              <CarouselCaption
                className="bg-dark rounded p-2"
                captionText={item.description}
                captionHeader={item.name}/>
            </CarouselItem>
          );
        })}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
        <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
      </Carousel>
    </LoadingComponent>
  )
}


export default MovieComponent;