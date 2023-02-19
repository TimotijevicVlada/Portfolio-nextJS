import React, { useState, useEffect } from 'react';
import css from "./Projects.module.scss";

//assets
import Jetwild from "images/jetwild/jetwild.png";
import Fitcher from "images/fitcher/fitcher.png";
import Skills from "images/skills_app/skillsApp.png";
import Budget from "images/budget/budget.png";
import Pizza from "images/pizza_bar/home.png";
import Quiz from "images/quizapp/quiz.png";
import Github from "images/github/home.png";
import Recipe from "images/recipeapp/recipe.png";
import Shirt from "images/shirtshop/home.png";
import Coffee from "images/coffeeshop/home.png";
import GameOfThrones from "images/gameofthrones/home.png";
import Forecast from "images/forecast/home.png";
import Todo from "images/todo/home.png";
import Ranking from "images/ranking/home.png";
import FurnitureShop from "images/furnitureshop/home.png";
import Crypto from "images/crypto/home.png";

//components
import Backdrop from "../Backdrop/Backdrop";
import SingleProject from './SingleProject/SingleProject';

//types
import { ProjectProps } from '@/types/projects';

const Projects = () => {

    const projects = [
        { name: "Jetwild", src: Jetwild.src },
        { name: "Fitcher", src: Fitcher.src },
        { name: "Skills", src: Skills.src },
        { name: "Budget", src: Budget.src },
        { name: "Pizza", src: Pizza.src },
        { name: "Quiz", src: Quiz.src },
        { name: "Github", src: Github.src },
        { name: "Recipe", src: Recipe.src },
        { name: "Shirt", src: Shirt.src },
        { name: "Coffee", src: Coffee.src },
        { name: "GameOfThrones", src: GameOfThrones.src },
        { name: "Forecast", src: Forecast.src },
        { name: "Todo", src: Todo.src },
        { name: "Ranking", src: Ranking.src },
        { name: "FurnitureShop", src: FurnitureShop.src },
        { name: "Crypto", src: Crypto.src },
    ]

    const [fullView, setFullView] = useState<ProjectProps | null>(null);

    useEffect(() => {
        if (fullView) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset"
        }
    }, [fullView])

    return (
        <div className={css.container}>
            <div className={css.projectsInfo}>
                <div className={css.info}>
                    <h1>Projects</h1>
                    <p>Discover my projects by clicking on it and see the details.</p>
                    <p>My projects are made by the following technologies:</p>
                </div>
            </div>
            <div className={css.projects}>
                {projects.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        alt={item.name}
                        onClick={() => setFullView(item)}
                    />
                ))}
            </div>
            {!!fullView &&
                <Backdrop closeAction={() => setFullView(null)}>
                    <SingleProject
                        item={fullView}
                    />
                </Backdrop>
            }
        </div>
    )
}

export default Projects;