




import React, { Fragment, useEffect } from "react";
import "./Product.css"
import { useSelector, useDispatch } from "react-redux";
// import Loader from "../../layout/Loader/Loader";
import { clearErrors, getProducts } from "../redux/actions/productAction";
import Products from "./Products";
import { useNavigate, useParams } from "react-router-dom";
// import Pagination from "react-js-pagination";
import { useState } from "react";
// import Typography from "@mui/material/Typography";
// import { Slider } from "@mui/material";
import { useAlert } from "react-alert";
// import MetaData from "../../layout/MetaData";
import { getAllCategories } from "../redux/actions/categoryAction";
import Loader from "../components/Loading";



function Product() {
    const { keyword } = useParams();
    const dispatch = useDispatch();
    // const alert = useAlert();
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 250000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);

    const {
        loading,
        products,
        error,
        productsCount,
        resultPerPage,
        filteredProductsCount,
    } = useSelector((state) => state.products);

    const { categoryList } = useSelector((state) => state.allCategories);

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };

    useEffect(() => {
        if (error) {
            alert.error(error.message);
            dispatch(clearErrors());
        }

        dispatch(getAllCategories());
        dispatch(getProducts(keyword, currentPage, price, category, ratings));
    }, [dispatch, keyword, currentPage, price, category, ratings, error, alert]);

    let count = filteredProductsCount;

    // const createCategoryList = (categories, options = []) => {
    //   if (categories) {
    //     for (let category of categories) {
    //       options.push({ value: category._id, name: category.name });
    //       if (category && category.children.length > 0) {
    //         createCategoryList(category.children, options);
    //       }
    //     }
    //     return options;
    //   }
    // };

    const renderCategories = (categories) => {
        let categoryArray = [];

        for (let category of categories) {
            categoryArray.push(
                <li key={category.name}  >
                    {category.parentId ? (
                        <a href={category.name} onClick={() => setCategory(category.name)}>{category.name}</a>
                    ) : (
                        <span onClick={() => setCategory(category.name)} >{category.name}</span>
                    )}

                    {category.children.length > 0 ? (
                        <ul>{renderCategories(category.children)}</ul>
                    ) : null}
                </li>
            );
        }
        return categoryArray;
    };

    const allproductsHandler = () => {
        window.location.reload();
        navigate("/products");
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    {/* <MetaData title={`PRODUCTS -- ${process.env.REACT_APP_SITE_NAME}`} /> */}
                    <h2 className="productsHeading">Products</h2>
                    <div className="products ">

                        {filteredProductsCount && filteredProductsCount ? (
                            products &&
                            products.map((product, index) => (
                                <Products product={product} key={index} />
                            ))
                        ) : (
                            <h4 className="productsHeadingForNoRecord">We will have products soon...</h4>
                        )}



                    </div>

                    {/* <div className="filterBox">
                        <Typography>Price</Typography>
                        <Slider
                            value={price}
                            onChange={priceHandler}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            min={0}
                            max={250000}
                        /> */}

                        {/* <Typography>Categories</Typography> */}
                        {/* <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul> */}

                        {/* <ul className="categoryBox">
              <li className="category-link" onClick={allproductsHandler}>All</li>
              {categoryList &&
                createCategoryList(categoryList).map((option) => (
                  <li
                    className="category-link"
                    key={option.name}
                    onClick={() => setCategory(option.name)}
                  >
                    {option.name}
                  </li>
                ))}
            </ul> */}

                        <div className="categoryContainer">

                            <ul >
                                <li className="category-linkAll" onClick={allproductsHandler}>All Categories</li>
                                {categoryList && categoryList.length > 0
                                    ? renderCategories(categoryList)
                                    : null}
                            </ul>

                        </div>


                        {/* <fieldset>
                            <Typography component="legend">Ratings Above</Typography>
                            <Slider
                                value={ratings}
                                onChange={(e, newRating) => {
                                    setRatings(newRating);
                                }}
                                aria-labelledby="continuous-slider"
                                min={0}
                                max={5}
                                valueLabelDisplay="auto"
                            />
                        </fieldset> */}
                    {/* </div> */}
{/* 
                    {resultPerPage < count && (
                        <div className="paginationBox">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resultPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText="Next"
                                prevPageText="Prev"
                                firstPageText="1st"
                                lastPageText="Last"
                                itemClass="page-item"
                                linkClass="page-link"
                                activeClass="pageItemActive"
                                activeLinkClass="pageLinkActive"
                            />
                        </div>
                    )} */}
                </Fragment>
            )}
        </Fragment>
    );
}
export default Product;
