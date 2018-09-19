export default {
  form: `
<div class="mb-2 card border">
  <div class="card-header {{transform('class', 'bg-' + component.theme)}}">
    <span class="mb-0 card-title" ref="header">
      {% if (component.collapsible) { %}
        <i class="formio-collapse-icon {{iconClass(collapsed ? 'triangle-right' : 'triangle-bottom')}} text-muted" data-title="Collapse Panel"></i>
      {% } %}
      {{t(component.title)}}
      {% if (component.tooltip) { %}
        <i ref="tooltip" class="{{iconClass('question-sign')}} text-muted"></i>
      {% } %}
    </span>
  </div>
  {% if (!collapsed) { %}
  <div class="card-body" ref="{{nestedKey}}">
    {{children}}
  </div>
  {% } %}
</div>
`,
};
