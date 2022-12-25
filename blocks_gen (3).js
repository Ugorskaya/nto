Blockly.Python['token'] = function(block) {
  var text_token = block.getFieldValue('token');
  // TODO: Assemble Python into code variable.
  var code = 'from aiogram import Bot, Dispatcher\nfrom aiogram.dispatcher.filters.state import StatesGroup, State\nfrom aiogram.contrib.fsm_storage.memory import MemoryStorage\nfrom aiogram.utils import executor\nimport random\n\n';
  code+="# Инициализируем бота\nbot = Bot(token = '" + text_token + "')";
  code+="\nstorage = MemoryStorage()\n\n";
  code+='# Инициализируем диспетчер сообщений\ndp = Dispatcher(bot, storage = storage)\n\n';
  return code;
};

// Blockly.Python['messege'] = function(block) {
//   var text_messege = block.getFieldValue('messege');
//   // TODO: Assemble Python into code variable.
//   var code = 'Пиу...\n';
//   return code;
// };

Blockly.Python['answer_gif'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'await bot.send_animation(message.chat.id,'+value_name+')\n';
  return code;
};

// Blockly.Python['init'] = function(block) {
//   var value_name = Blockly.Python.valueToCode(block, 'ds', Blockly.Python.ORDER_ATOMIC);
  
//   var code = '# Инициализируем диспетчер сообщений\ndp = Dispatcher(bot, storage = storage)';
//   return code;
// };

Blockly.Python['answev_messege'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  
  // TODO: Assemble Python into code variable.
  var code = 'await message.answer('+value_name+')\n';
  return code;
};

Blockly.Python['message_handler'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  // TODO: Assemble Python into code variable.
  var code = '\n\n@dp.message_handler(commands='+value_name+')\nasync def start_command(message):\n';
  code+=statements_do;
  return code;
};


Blockly.Python['answer_emoji'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME6', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'await bot.send_message(message.chat.id, text='+value_name+')\n';
  return code;
};

Blockly.Python['answer_stiker'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME7', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'await bot.send_sticker(message.chat.id,'+value_name+')\n';
  return code;
};

Blockly.Python['state'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // var value_name1 = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = "\nclass UserState(StatesGroup):\n";
  code+=statements_name;
  return code;
};

Blockly.Python['state_f'] = function(block) {
  var text_param = block.getFieldValue('param');
  // TODO: Assemble Python into code variable.
  var code = text_param+' = State()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['state_function'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var text_name1 = block.getFieldValue('NAME1');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '\n@dp.message_handler(state=UserState.'+text_name+')\nasync def '+text_name1+'(message, state):\n';
  code+="await state.update_data("+text_name+"=message.text)\n  answer = await state.get_data()\n  value = answer["+text_name+"].strip().lower()\n";
  code+=statements_name;
  return code;
};

Blockly.Python['state_next'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'await UserState.'+text_name+'.set()\n';
  return code;
};

Blockly.Python['state_end'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'await state.finish()\n';
  return code;
};

Blockly.Python['state_value'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'value';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['list_find'] = function(block) {
 var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
 var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);

  
  // TODO: Assemble Python into code variable.
  var code = value_name+' in '+ value_name1;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['random'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'random.choice('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['search'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME55'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = value_name+' in '+variable_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['random_tr_fl'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "random.choice([True, False])";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['create_list'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  



  var code = "'"+text_name+"':";
  if (value_name==0){
  	code+=value_name1;
  }
  else{
  	
  	value_name1=value_name1.slice(1,-1).split(",");
  	value_name=value_name.slice(1,-1).split(",");

  	code += "{";
  	for (let i = 0; i < value_name.length; i++) {
  			code+=value_name1[i]+":"+value_name[i]+",\n";
	}
  	code+="}"
  }
  code+=","
  return code;
};

Blockly.Python['create_dick'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  // TODO: Assemble Python into code variable.
  var code = text_name+'={\n'+statements_name1+"}\n";
  return code;
};


Blockly.Python['for_k_i'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  // TODO: Assemble Python into code variable.
  var code = 'for k, v in '+text_name+".items():\n";
  code+=statements_name1
  return code;
};

Blockly.Python['if_k_i'] = function(block) {
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  // TODO: Assemble Python into code variable.
  var code = 'if value.find(k)!=-1:\n';
  code+=statements_name1;
  return code;
};

Blockly.Python['k_var'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'if k = '+text_name+':\n';
  code+=statements_name1;
  code+="else:\n"
  code+=statements_name;
  return code;
};


Blockly.Python['k_var1'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var text_name2 = block.getFieldValue('NAME2');
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'for k, v in '+text_name+".items():\n";
  code+='if k = '+text_name2+':\n';
  return code;
};

 for k, v in d.items():
        if value.find(k)!=-1:
            
            if k == 'загад':