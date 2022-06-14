import styled from "styled-components";

export const Main = styled.div`
  width: 90%;
  margin: 2rem;
  background-color: rgb(0, 0, 0, 0.6);
  border-radius: 15px;
  box-shadow: 0px -2px 15px 2px rgba(13, 38, 96, 0.81);
  -webkit-box-shadow: 0px -2px 15px 2px rgba(13, 38, 96, 0.81);
  -moz-box-shadow: 0px -2px 15px 2px rgba(13, 38, 96, 0.81);

  h1 {
    color: #fff;
    text-align: center;
    margin: 1.3rem 0;
    font-size: 1.3rem;
    text-transform: uppercase;

    @media (min-width: 768px) {
      letter-spacing: 0.3rem;
    }
  }
`;

export const ConteinerForm = styled.div`
  margin-bottom: 2rem;

  h2 {
    text-align: center;
    padding: 1rem;
    color: #c7d7f1;
  }

  form {
    h3{
      text-align: center;
      margin: 1rem;
      color: #c7d7f1;
    }
    input[type="text"] {
      font-family: "Lato", sans-serif;
      width: 80%;
      height: 2rem;
      text-align: center;
      margin: auto;
      display: block;
    }

    .container__radio {
      width: 90%;
      height: 30px;
      margin: 0 auto 1rem auto;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      color: #fff; 

       @media (min-width: 768px) {
         width: 30%;
       }
    }

    button {
      width: 100px;
      height: 30px;
      display: block;
      margin: 0 auto 1rem auto;
      border-radius: 7px;
      border: none;
    }
  }
`;

export const ContainerFilter = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2rem;

  h3 {
    color: #c7d7f1;
  }

  select {
    width: 100px;
    height: 25px;
    margin: 1rem;
    font-family: "Lato", sans-serif;
  }

  button {
    width: 100px;
    border: none;
    border-radius: 7px;
  }
`;

export const ContainerTable = styled.div`
  width: 90%;
  margin: 1rem auto;

  h3 {
    color: #cfdbef;
    margin: 1rem;
    letter-spacing: 0.1rem;
  }

  table {
    width: 100%;
    font-size: 0.9rem;

    thead {
      tr {
        th {
          color: #91a6d8;

          @media (min-width: 768px) {
            letter-spacing: 0.2rem;
          }
        }

        @media (min-width: 768px) {
          font-size: 1.1rem;
        }
      }
    }

    tbody {
      tr {
        text-align: center;

        &:nth-child(odd) {
          background-color: #0d2660;
        }

        &:nth-child(even) {
          background-color: #4e6194;
        }

        td {
          height: 60px;
          border-right: 2px solid #000;
          padding: 0.2rem;
          color: #c7d7f1;

          @media (min-width: 768px) {
            &:nth-child(1) {
              width: 300px;
              height: 50px;
            }
          }

          @media (min-width: 1200px) {
            font-size: 1rem;

            &:nth-child(1) {
              width: 500px;
            
            }
          }
        }

        button {
          width: 28px;
          background-color: transparent;
          border: none;
          color: #c7d7f1;
          font-size: 1.3rem;
        }
      }
    }
  }
`;
