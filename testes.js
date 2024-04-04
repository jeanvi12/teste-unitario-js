document.addEventListener('DOMContentLoaded', function() {
  // Função de teste
  function runTests() {
    beforeEach(function() {
      // Configurações adicionais antes de cada teste
    });

    // Testes
    it('deve retornar a soma de dois números positivos', function() {
      expect(adicionar(2, 3)).toBe(5);
    });

    it('deve retornar zero ao adicionar zero a um número', function() {
      expect(adicionar(5, 0)).toBe(5);
      expect(adicionar(0, 10)).toBe(10);
      expect(adicionar(0, 0)).toBe(0);
    });

    it('deve retornar a soma de números positivos e negativos', function() {
      expect(adicionar(5, -3)).toBe(2);
      expect(adicionar(-10, 8)).toBe(-2);
    });

    it('deve retornar a soma correta de números decimais', function() {
      expect(adicionar(2.5, 1.5)).toBeCloseTo(4);
    });

    it('deve retornar NaN ao adicionar valores inválidos', function() {
      expect(adicionar('abc', 2)).toBeNaN();
      expect(adicionar(10, NaN)).toBeNaN();
    });

    it('deve falhar ao adicionar números incorretos', function() {
      expect(adicionar(3, 4)).toBe(7);
    });

//FUNÇÃO DA DIVISAO
    it('deve retornar a divisao de dois números positivos', function() {
      expect(divisao(10, 2)).toBe(5);
    });
    it('deve retornar NaN ao adicionar valores inválidos', function() {
      expect(divisao('abc', 2)).toBeNaN();
      expect(divisao(15, NaN)).toBeNaN();
    });
    it('deve retornar a divisao de números positivos e negativos', function() {
      expect(divisao(6, -3)).toBe(-2);
      expect(divisao(-10, 2)).toBe(-5);
    });
    it('deve retornar a divisao de números negativos e negativos', function() {
      expect(divisao(-6, -3)).toBe(2);
      expect(divisao(-10, -2)).toBe(5);
    });





  }

  // Executar os testes do Jasmine
  function executeTests() {
    var resultElement = document.getElementById('jasmine-result');
    var result = {};

    try {
      runTests();
    } catch (error) {
      result.message = 'Erro durante a execução dos testes: ' + error.message;
    }

    resultElement.innerText = JSON.stringify(result);
  }

  executeTests();
});

// Função para adicionar dois números
function adicionar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  return a + b;

  //função para dividir dois números
}
function divisao(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  return a / b;
}