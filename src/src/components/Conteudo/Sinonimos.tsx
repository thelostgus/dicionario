import React from "react";
import { Row, Col } from "antd"

export const Sinonimos: React.FC<{ sinonimos: string[] }> = ({ sinonimos }) => {
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
                    <h2>Sinonimos</h2>
                </Col>
            </Row>
            {
                sinonimos.map((item, index) => (
                    
                    <Row
                        gutter={12}
                        style={{ alignItems: "center" }}
                        justify="center"
                        key={index}
                    >
                        <Col
                            span={12}
                            style={{
                                textAlign: "center"
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