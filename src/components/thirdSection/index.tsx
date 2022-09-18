import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image'
import ReactPlayer from 'react-player/youtube'

export function ThirdSection() {

    return(
        <>
            <div className={styles.container} id="posicionamento">
                <div className={styles.centerContainer}>
                    <div className={styles.headerContent}>
                        <Image
                            src="/assets/thirdSection/posicionamentos.png"
                            alt="Posicionamentos"
                            width={531}
                            height={43}
                            quality={100}
                        />
                    </div>

                    <div className={styles.bodyVideoContainer}>
                        <ReactPlayer url=' https://youtu.be/gzK8YON-8Ps' />
                    </div>

                    <div className={styles.footer}>
                            <div className={styles.card}>
                                <Image
                                    src="/assets/thirdSection/boy.png"
                                    alt="Ícone de um menino"
                                    width={84}
                                    height={86}
                                    quality={100}
                                />

                                <div className={styles.textBox}>
                                    <h2 className={styles.text}>
                                        Faço parte da Diretoria<br />
                                        executiva do Sisemp
                                    </h2>
                                </div>
                            </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/hand.png"
                                alt="Ícone de uma mão"
                                width={84}
                                height={86}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Conquistamos o pagto dos<br />
                                    retroativos das progressões
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/money.png"
                                alt="Ícone do dinheiro"
                                width={84}
                                height={86}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Luto pela equiparação<br />
                                    salarial dos Analistas em Saúde
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/heart.png"
                                alt="Ícone do dinheiro"
                                width={84}
                                height={86}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Luto pela implantação do<br />
                                    piso salarial dos Agentes de Saúde
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/heart.png"
                                alt="Ícone do dinheiro"
                                width={84}
                                height={86}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Luto pelo acréscimo do <br />
                                    auxílio alimentação dos <br />
                                    servidores municipais
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerMobile} id="posicionamento">
                <div className={styles.centerContainerMobile}>
                    <div className={styles.headerContentMobile}>
                        <Image
                            src="/assets/thirdSection/posicionamentos.png"
                            alt="Posicionamentos"
                            width={550}
                            height={41}
                            quality={100}
                        />
                    </div>

                    <div className={styles.bodyVideoContainerMobile}>
                        <ReactPlayer
                            width={977}
                            height={550}
                            style={{
                                marginLeft: 100
                            }}
                            url=' https://youtu.be/gzK8YON-8Ps'
                        />
                    </div>

                    <div className={styles.footerMobile}>
                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/boy.png"
                                alt="Ícone de um menino"
                                width={194}
                                height={196}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Faço parte da Diretoria<br />
                                    executiva do Sisemp
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/hand.png"
                                alt="Ícone de uma mão"
                                width={194}
                                height={196}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Conquistamos o pagto dos<br />
                                    retroativos das progressões
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/money.png"
                                alt="Ícone do dinheiro"
                                width={194}
                                height={196}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Luto pela equiparação<br />
                                    salarial dos Analistas em Saúde
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/heart.png"
                                alt="Ícone do dinheiro"
                                width={194}
                                height={196}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Luto pela implantação do<br />
                                    piso salarial dos Agentes de Saúde
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/heart.png"
                                alt="Ícone do dinheiro"
                                width={194}
                                height={196}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Luto pelo acréscimo do <br />
                                    auxílio alimentação dos <br />
                                    servidores municipais
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}