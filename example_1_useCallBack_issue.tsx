const Example1UseCallBackIssue = () => {

    const [someState, setSomeState] = useState(false);

  const firstFunction = useCallback(() => {
      if(someState) {
         //do anything
      }
  }, []);

  const secondFunction = useCallback(() => {
      // firstFunction() -- если функция, которую мы используем в закешированной(useCallback)
      // функции использует внешний стейт то его нужно помещать в зависимости этой функии
  }, [someState]);//<<<<< как тут




    return (
        <div>
        </div>
    );
};

export default Example1UseCallBackIssue;