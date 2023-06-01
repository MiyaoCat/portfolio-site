const { ref, computed, watch, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, withModifiers, withDirectives, vModelText, createCommentVNode } = Vue;

const _hoisted_1 = { class: "title" };
const _hoisted_2 = /*#__PURE__*/createElementVNode("label", { for: "quote" }, "What is the quote?", -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/createElementVNode("label", { for: "author" }, "Who said it?", -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/createElementVNode("button", { type: "submit" }, "Get Quote", -1 /* HOISTED */);
const _hoisted_5 = { key: 0 };
	
	
var script = {
  setup(__props) {

	const title = ref("Printing Quotes");
	const quote = ref("");
	const author = ref("");
	const output = ref("");
	
	const message = computed( function() {
		if (quote.value == "" && author.value == "") {
			return `Who said what?`
		} 
		if (quote.value == "" && author.value != "") {
			return `What did ${author.value} say?`
		}
		if (quote.value != "" && author.value == "") {
			return `Who said ${quote.value}?`
		}
		else {
			return `${author.value} once said ${quote.value}.`;
		}
		
	});
	
	function createMessage() {
		output.value = message;
	}	
	watch(quote, function(newquote, oldquote) {
		if (newquote != oldquote) {
			output.value = "";
		}
	});
	
	watch(author, function(newAuthor, oldAuthor) {
		if (newAuthor != oldAuthor) {
			output.value = "";
		}
	});

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("h1", _hoisted_1, toDisplayString(title.value), 1 /* TEXT */),
    createElementVNode("form", {
      onSubmit: _cache[2] || (_cache[2] = withModifiers($event => (createMessage()), ["prevent"]))
    }, [
      _hoisted_2,
      withDirectives(createElementVNode("input", {
        id: "quote",
        type: "text",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((quote).value = $event))
      }, null, 512 /* NEED_PATCH */), [
        [vModelText, quote.value]
      ]),
      _hoisted_3,
      withDirectives(createElementVNode("input", {
        id: "author",
        type: "text",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((author).value = $event))
      }, null, 512 /* NEED_PATCH */), [
        [vModelText, author.value]
      ]),
      _hoisted_4
    ], 32 /* HYDRATE_EVENTS */),
    (output.value)
      ? (openBlock(), createElementBlock("output", _hoisted_5, toDisplayString(output.value), 1 /* TEXT */))
      : createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}
}

};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\nbody {\n\tbackground-color: #370088;\n}\nform {\n\tdisplay: grid;\n\tflex-direction: column;\n\tmax-width: 500px;\n\tmargin: 25px;\n\tmargin-bottom: 40px;\n\tgap: 8px;\n\tfont-size: 16px;\n\tfont-family: Anton, helvetica;\n\tborder: 3px solid black;\n\tborder-radius: 10px;\n\tpadding: 40px 20px 75px 20px;\n\tbackground-color: #ddd5e9;\n\tbox-shadow: 0 0 30px hotpink;\n}\n.title {\n\tmargin: 20px;\n\tletter-spacing: .05em;\n}\nh1 {\n\tfont-size: 38px;\n\tfont-weight: 700;\n\ttext-shadow: 2px 2px 3px limegreen;\n\tfont-family: Clash Display;\n\tmargin-bottom: 7px;\n}\n.instructions {\n\tline-height: 1.2em;\n}\nli {\n\tlist-style: bullets;\n\tlist-style-position: inside;\n}\nh2 {\n\tfont-weight: 700;\n\tfont-size: 20px;\n}\nform {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5px;\n\tborder: 3px solid black;\n\tborder-radius: 6px;\n\tpadding: 10px; \n\tbackground-color: hsla(263, 6%, 55%, 0.85);\n\tmargin: 20px;\n}\nlabel {\n\tmargin-top: 10px;\n\tfont-weight: 700;\n}\n.whisper-voice {\n\tfont-size: 12px;\n\tmargin-top: 3px;\n\tfont-weight: 500;\n}\n[name =\"state\"] {\n\tmax-width: 200px;\n}\nspan {\n\tfont-weight: 700;\n\tcolor: hsla(306, 92%, 61%, 1.00);\n}\ninput {\n\tpadding: 5px;\n\tborder: 3px solid black;\n\tborder-radius: 5px;\n\tmax-width: 80px;\n}\nbutton {\n\tborder: none;\n\tbackground-color: hsla(306, 92%, 61%, 1.00);\n\tpadding: 7px 5px;\n\tborder-radius: 6px;\n\tfont-size: 17px;\n\tmax-width: 150px;\n}\noutput {\n\tbackground-color: black;\n\tcolor: limegreen;\n\tfont-family: Monospace;\n\tpadding: 15px;\n\tborder-radius: 6px;\n\tmargin-left: 20px;\n\tline-height: 1.5em;\n}\noutput:empty {\n/* \tdisplay: none; */\n}\n.bad {\n\tcolor: red;\n}\n.error {\n\tbackground-color: red;\n}\n.style {\n\tborder: 3px solid red;\n}\n\n";
styleInject(css_248z);

script.__file = "tmp/codepen/vuejs/src/pen.vue";

export { script as default };