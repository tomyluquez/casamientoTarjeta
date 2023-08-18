interface CuentaProps {
  titular: string;
  alias: string;
  cbu: string;
}

const Cbu = ({ titular, alias, cbu }: CuentaProps) => {
  return (
    <div>
      <strong>Datos de la cuenta</strong>
      <p>
        Titular: <span>{titular}</span>
      </p>
      <p>
        Alias: <span>{alias}</span>
      </p>
      <p>
        CBU: <span>{cbu}</span>
      </p>
    </div>
  );
};

export default Cbu;
