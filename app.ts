class Calculator {
      private current: string = '';
      private previous: string = '';
      private operator: string | null = null;
  
      public numClicked(num: string): void {
          this.current += num;
          this.updateDisplay();
      }
  
      public opClicked(op: string): void {
          if (this.current !== '') {
              this.previous = this.current;
              this.current = '';
              this.operator = op;
          }
      }
  
      public clear(): void {
          this.current = '';
          this.previous = '';
          this.operator = null;
          this.updateDisplay();
      }
  
      public calculate(): void {
          let result;
          switch (this.operator) {
              case '+':
                  result = parseFloat(this.previous) + parseFloat(this.current);
                  break;
              case '-':
                  result = parseFloat(this.previous) - parseFloat(this.current);
                  break;
              case '*':
                  result = parseFloat(this.previous) * parseFloat(this.current);
                  break;
              case '/':
                  result = parseFloat(this.previous) / parseFloat(this.current);
                  break;
              default:
                  return;
          }
          this.current = result.toString();
          this.previous = '';
          this.operator = null;
          this.updateDisplay();
      }
  
      private updateDisplay(): void {
          const display = document.getElementById('display') as HTMLInputElement;
          display.value = this.current;
      }
  }
  
  const calc = new Calculator();
  