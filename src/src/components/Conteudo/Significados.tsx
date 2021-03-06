import React from "react";
import { Row, Col } from "antd"

export const Significados: React.FC<{ significados: string[] }> = ({ significados }) => {
    return (
        <>
            <Row
                gutter={12}
                style={{ alignItems: "center" }}
                justify="center"
            >
                <Col
                    span={12}
                    style={{
                        textAlign: "center"
                    }}
                >
                    <h2>Significados</h2>
                </Col>
            </Row>
            
            {
                significados.map((item, index) => (
                    <Row
                        gutter={12}
                        style={{ alignItems: "center" }}
                        justify="center"
                        key={index}
                    >
                        <Col
                            span={12}
                            style={{
                                // textAlign: "center"
                            }}
                        >
                            <h3 style={{
                                fontFamily: "monospace"
                            }}>• {item}</h3>
                        </Col>
                    </Row>
                ))
            }
        </>
    )
}