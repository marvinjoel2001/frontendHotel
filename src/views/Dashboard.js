import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { chartExample1 } from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setBigChartData] = useState("data1");
  const [chartData, setChartData] = useState(chartExample1.data1);
  const [totalClientes, setTotalClientes] = useState(0);
  const [ingresoTotal, setIngresoTotal] = useState(0);
  const [habitacionesRegistradas, setHabitacionesRegistradas] = useState(0);

  const setBgChartData = (name) => {
    setBigChartData(name);
  };

  const fetchChartData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/pagos/");
      const data = await response.json();
      const labels = data.map((item) => item.fecha);
      const montos = data.map((item) => item.monto);

      setChartData({
        ...chartData,
        datasets: [
          {
            ...chartData.datasets[0],
            data: montos,
          },
        ],
        labels: labels,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchTotalClientes = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/clientes/");
      const data = await response.json();
      setTotalClientes(data.length);
    } catch (error) {
      console.error("Error fetching total clientes:", error);
    }
  };

  const fetchIngresoTotal = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/pagos/");
      const data = await response.json();
      const total = data.reduce((acc, item) => acc + parseFloat(item.monto), 0);
      setIngresoTotal(total);
    } catch (error) {
      console.error("Error fetching ingreso total:", error);
    }
  };


  const fetchHabitacionesRegistradas = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/habitaciones/");
      const data = await response.json();
      setHabitacionesRegistradas(data.length);
    } catch (error) {
      console.error("Error fetching habitaciones registradas:", error);
    }
  };

  useEffect(() => {
    fetchChartData();
    fetchTotalClientes();
    fetchIngresoTotal();
    fetchHabitacionesRegistradas();
  }, []);

  return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Total pagos</h5>
                      <CardTitle tag="h2">Pago Realizados-Fecha</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                          className="btn-group-toggle float-right"
                          data-toggle="buttons"
                      >
                        {/* Buttons for different chart data */}
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line data={chartData} options={chartExample1.options} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total Clientes</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" /> {totalClientes}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Ingreso Total</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    {ingresoTotal} Bs
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Habitaciones registradas</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> {habitacionesRegistradas}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </div>
      </>
  );
}

export default Dashboard;

