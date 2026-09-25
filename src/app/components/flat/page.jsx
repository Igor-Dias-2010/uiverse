import styles from "./flat.module.css";
import Navbar from "@/app/navbar";

export default function FlatDesign() {
    return (
        <div className={styles.page}>
            <Navbar />

            <header className={styles.hero}>
                <h1 className={styles.title}>Flat Design</h1>
                <p className={styles.description}>
                    Uma interface baseada em simplicidade, formas geométricas,
                    cores sólidas e ausência de efeitos tridimensionais.
                </p>
            </header>

            <main className={styles.content}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Buttons</h2>

                    <div className={styles.card}>
                        <div className={styles.buttonGroup}>
                            <button className={styles.button}>Botão</button>
                            <button className={styles.buttonSecondary}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Card</h2>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Card de Flat Design</h3>

                        <p className={styles.cardText}>
                            Essa é uma demonstração de texto em Flat Design.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Input</h2>

                    <div className={styles.card}>
                        <label className={styles.label} htmlFor="name">
                            Nome
                        </label>

                        <input
                            className={styles.input}
                            id="name"
                            type="text"
                            placeholder="Digite seu nome"
                        />
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Checkbox</h2>

                    <div className={styles.card}>
                        <label className={styles.checkbox}>
                            <input type="checkbox" />
                            <span>Eu concordo</span>
                        </label>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Toggle</h2>

                    <div className={styles.card}>
                        <label className={styles.toggle}>
                            <input type="checkbox" />
                            <span className={styles.toggleSlider}></span>
                        </label>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Badge</h2>

                    <div className={styles.card}>
                        <span className={styles.badge}>Ativo</span>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Alert</h2>

                    <div className={styles.alert}>
                        <strong className={styles.alertTitle}>
                            Atenção
                        </strong>

                        <p className={styles.alertText}>
                            Esta é uma mensagem de alerta.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Progress Bar</h2>

                    <div className={styles.card}>
                        <div className={styles.progress}>
                            <div className={styles.progressBar}></div>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Select</h2>

                    <div className={styles.card}>
                        <label className={styles.label} htmlFor="option">
                            Opção
                        </label>

                        <select className={styles.select} id="option">
                            <option>Opção 1</option>
                            <option>Opção 2</option>
                            <option>Opção 3</option>
                        </select>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Modal</h2>

                    <div className={styles.modal}>
                        <h3 className={styles.modalTitle}>
                            Confirmação
                        </h3>

                        <p className={styles.modalText}>
                            Deseja continuar com esta ação?
                        </p>

                        <div className={styles.modalActions}>
                            <button className={styles.buttonSecondary}>
                                Cancelar
                            </button>

                            <button className={styles.button}>
                                Confirmar
                            </button>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Tooltip</h2>

                    <div className={styles.card}>
                        <button className={styles.tooltip}>
                            Passe o mouse

                            <span className={styles.tooltipText}>
                                Informação adicional
                            </span>
                        </button>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Pagination</h2>

                    <div className={styles.pagination}>
                        <button className={styles.pageButton}>1</button>
                        <button className={styles.pageButton}>2</button>
                        <button className={styles.pageButton}>3</button>
                        <button className={styles.pageButton}>4</button>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>UIVerse — Flat Design</p>
            </footer>
        </div>
    );
}