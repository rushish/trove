import style from '../styles/categories.module.css';

const Categories = () => {
    return (
        <>
            <h2 className={`${style.page_title} hanson`}>CATEGORIES<div className={style.grow}></div></h2>
            <div className={style.container}>
                <section className={`${style.col} ${style.male}`}>
                    <h1 className={style.title}>Male</h1>
                </section>
                <section className={`${style.col} ${style.female}`}>
                    <h1 className={style.title}>Female</h1>
                </section>

                <section className={`${style.col} ${style.male}`}>
                    <h1 className={style.title}>Male</h1>
                </section>
                <section className={`${style.col} ${style.female}`}>
                    <h1 className={style.title}>Female</h1>
                </section>

                <section className={`${style.col} ${style.male}`}>
                    <h1 className={style.title}>Male</h1>
                </section>
                <section className={`${style.col} ${style.female}`}>
                    <h1 className={style.title}>Female</h1>
                </section>
            </div >
        </>
    );
}

export default Categories;