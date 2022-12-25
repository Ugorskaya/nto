Blockly.Blocks['token'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Подключение к Telegram");
    this.appendDummyInput()
        .appendField("Введите свой токен:")
        .appendField(new Blockly.FieldTextInput("YOU_TOKEN"), "token");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("token");
 this.setHelpUrl("Введите токен из BotFather");
  }
};

// Blockly.Blocks['messege'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("Отправляем сообщение пользователю");
//     this.appendDummyInput()
//         .appendField("Введите сообщение:")
//         .appendField(new Blockly.FieldTextInput("Сообщение от бота"), "mes");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("messege");
//  this.setHelpUrl("Введите токен из BotFather");
//   }
// };

Blockly.Blocks['answer_gif'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("Отправить в ответ пользователю гифку");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("answer_gif");
 this.setHelpUrl("Присоедините ссылку на гифку");
  }
};

Blockly.Blocks['message_handler'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Вызов метода message_handler из диспетчера задач");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Обработка команды");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("Делать");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("присоедините команду, например /start");
  }
};


// Blockly.Blocks['init'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("Инициализация Диспетчера сообщений");
//     this.appendValueInput("ds")
//         .setCheck(null)
//         .appendField("Создайте переменную для сообщений");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("ds");
//  this.setHelpUrl("Присоедините ссылку на гифку");
//   }
// };

Blockly.Blocks['answev_messege'] = {
  init: function() {
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField("Отправляем сообщение пользователю");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("answev_messege");
 this.setHelpUrl("Присоедините текст сообщения");
  }
};

Blockly.Blocks['random'] = {
  init: function() {
    this.appendValueInput("NAME4")
        .setCheck(null)
        .appendField("Вывести любой элемент из списка");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("if_else");
 this.setHelpUrl("Присоедините список");
  }
};

Blockly.Blocks['search'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Найти ");
    this.appendValueInput("NAME5")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("в списке")
        .appendField(new Blockly.FieldVariable("item"), "NAME55");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("if_else");
 this.setHelpUrl("Присоедините список. Ответом будет True или False");
  }
};

Blockly.Blocks['answer_emoji'] = {
  init: function() {
    this.appendValueInput("NAME6")
        .setCheck(null)
        .appendField("Отправить в ответ пользователю эмоджи");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("emoji");
 this.setHelpUrl("Присоедините код эмоции");
  }
};

Blockly.Blocks['answer_stiker'] = {
  init: function() {
    this.appendValueInput("NAME7")
        .setCheck(null)
        .appendField("Отправить в ответ пользователю стикер");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("stiker");
 this.setHelpUrl("Присоедините код стикера");
  }
};

Blockly.Blocks['state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Установка машины  состояний");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Присоедините название команд");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("Список");
  }
};

Blockly.Blocks['state_f'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("default"), "param")
        .appendField("= State();");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("Введите название переменной");
  }
};


Blockly.Blocks['state_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("@dp.message_handler(state=UserState.")
        .appendField(new Blockly.FieldTextInput("default"), "NAME")
        .appendField(")");
    this.appendDummyInput()
        .appendField("async def")
        .appendField(new Blockly.FieldTextInput("name_function"), "NAME1")
        .appendField("(message, state):");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("присоедините команду, например /start");
  }
};

Blockly.Blocks['state_next'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Переход к следующему состоянию");
    this.appendDummyInput()
        .appendField("await UserState.")
        .appendField(new Blockly.FieldTextInput("default"), "NAME")
        .appendField(".set()");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['state_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Завершение текущего состояния");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['state_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Текущее сообщение от пользователя");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['list_find'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("найти");
    this.appendDummyInput()
        .appendField("в списке");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['random_tr_fl'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Вывести True или False");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("if_else");
  }
};
Blockly.Blocks['create_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Название словаря")
        .appendField(new Blockly.FieldTextInput("name_list"), "NAME");
    this.appendValueInput("NAME1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ключи");
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Значения");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("if_else");
 this.setHelpUrl("Присоедините список");
  }
};

Blockly.Blocks['create_dick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Создание словаря")
        .appendField(new Blockly.FieldTextInput("name_list"), "NAME");
    this.appendStatementInput("NAME1")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("if_else");
 this.setHelpUrl("Присоедините список");
  }
};

Blockly.Blocks['for_k_i'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for k, v in ")
        .appendField("для items словаря")
        .appendField(new Blockly.FieldTextInput("dick_name"), "NAME");
    this.appendStatementInput("NAME1")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_k_i'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Если ключ словаря есть в сообщении пользователя");
    this.appendStatementInput("NAME1")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['k_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Если ключ словаря  = ")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.appendStatementInput("NAME1")
        .setCheck(null);
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Иначе");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['k_var1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for k, v in ")
        .appendField(new Blockly.FieldTextInput("default"), "NAME")
        .appendField(".items():");
    this.appendDummyInput()
        .appendField("Если ключ есть в сообщении пользователя");
    this.appendStatementInput("NAME1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Если ключ словаря  = ")
        .appendField(new Blockly.FieldTextInput("default"), "NAME2");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Иначе");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};