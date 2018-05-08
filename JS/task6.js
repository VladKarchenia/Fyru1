function howOld() {
    const age = prompt('Сколько те лет, ебать?', '');
    if (age > 0) {
        if (age < 18) {
          return 'Ты мелкий пидор, уроки сделал?';
        } else if (age < 45) {
          return 'Заходи братишка, чай будешь?';
        } else if (age <= 110) {
          return 'Старпёр епаны, дорогу молодым';
        } else {
          return 'Так долго не живут';
        }
    } else {
      return 'Ты пЕздюк? Введи нормально';
    }
}
howOld();